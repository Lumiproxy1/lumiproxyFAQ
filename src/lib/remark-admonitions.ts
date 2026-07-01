import type { Root } from "mdast";
import { visit } from "unist-util-visit";

const TYPES = new Set(["note", "tip", "info", "warning", "caution", "danger", "important"]);
const TITLES: Record<string, { zh: string; en: string }> = {
  note: { zh: "笔记", en: "Note" },
  tip: { zh: "提示", en: "Tip" },
  info: { zh: "信息", en: "Info" },
  warning: { zh: "警告", en: "Warning" },
  caution: { zh: "注意", en: "Caution" },
  danger: { zh: "危险", en: "Danger" },
  important: { zh: "重要", en: "Important" },
};

// Transforms remark-directive containerDirective nodes (:::tip ... :::) into
// styled <div class="admonition admonition-<type>"> blocks.
export function remarkAdmonitions() {
  return (tree: Root) => {
    visit(tree, (node: any) => {
      if (node.type !== "containerDirective") return;
      if (!TYPES.has(node.name)) return;
      const type = node.name as keyof typeof TITLES;

      // Extract label: first child marked as directiveLabel, or attributes.title
      let labelText: string | undefined;
      const children = (node.children || []).slice();
      if (children.length && children[0]?.data?.directiveLabel) {
        const labelNode: any = children.shift();
        labelText = (labelNode.children || [])
          .map((c: any) => c.value || "")
          .join("")
          .trim();
      }
      if (!labelText) {
        labelText =
          (node.attributes && node.attributes.title) ||
          TITLES[type]?.en ||
          type.toUpperCase();
      }

      const data = node.data || (node.data = {});
      data.hName = "div";
      data.hProperties = { className: ["admonition", `admonition-${type}`] };

      node.children = [
        {
          type: "paragraph",
          data: {
            hName: "div",
            hProperties: { className: ["admonition-title"] },
          },
          children: [{ type: "text", value: labelText }],
        },
        {
          type: "paragraph",
          data: {
            hName: "div",
            hProperties: { className: ["admonition-content"] },
          },
          children: children,
        },
      ];
    });
  };
}
