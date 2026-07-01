# Residential Proxies · FAQ

## 1. What should I do if the connection times out?

Please check your local network, firewall settings, and whether your account has an overdue balance. You can use cURL to troubleshoot the connection first:

```bash
curl -x http://username:password@Proxy server:port http://api.ip.cc

curl -x socks5h://username:password@Proxy server:port http://api.ip.cc

```

## 2. Response Error Codes Guide

* `200` - Response Successful
* `403` - Domain Blocked
* `470` - Username and password were not entered
* `490` - No available IPs in the selected region
* `512` - Whitelist authentication error
* `610` - IP is from Mainland China (Direct connection via Mainland China network environment is not supported)
* `612` - Authentication failed, sub-account traffic limit reached, or main account has no remaining data (data ran out or package expired)
* `613` - Number of concurrent requests exceeds the limit

## 3. How do I keep the same IP for up to 120 minutes?

Append `-session-xxxx` right after your username, where `xxxx` represents your session parameter.

:::tip 💡
The session parameter consists of alphanumeric characters (case-sensitive). The more complex the parameter, the more stable the session will be.
:::

## 4. Which countries are supported?

We cover 195+ countries and regions, including:

```text
United States
Russia
United Kingdom
Indonesia
Mexico
Canada
India
Philippines
Jordan
France
Germany
Argentina
Spain
Italy
Saudi Arabia
Nigeria
Myanmar
Ukraine
Australia
Thailand
Israel
Netherlands
Oman
South Korea
Singapore
Bahrain
Pakistan
Peru
Kazakhstan
Kuwait
Malaysia
Ethiopia
Egypt
Poland
Greece
Uzbekistan
Ghana
Belgium
Vietnam
Kenya
Turkey
Japan
Afghanistan
Ireland
Qatar
New Zealand
Iraq
Sweden
Czech Republic
Brazil
Algeria
Laos
Belarus
Austria
Angola
Morocco
Nepal
Norway
Uganda
Georgia
Finland
Sudan
Romania
Armenia
Palestine
South Africa
Sri Lanka
Guinea
Portugal
Switzerland
Azerbaijan
Lebanon
Cyprus
Colombia
Denmark
Tunisia
Kyrgyzstan
Serbia
Hungary
Slovakia
Chile
Bulgaria
Yemen
Croatia
Latvia
Tanzania
Lithuania
Ecuador
Moldova
Cameroon
Tajikistan
Somalia
Brunei
Jamaica
Estonia
Malta
Slovenia
Luxembourg
Kosovo
Senegal
Venezuela
Uruguay
Bolivia
Rwanda
Maldives
Benin
Bahamas
Equatorial Guinea
Zambia
Paraguay
Republic of the Congo
Namibia
Panama
Nicaragua
Haiti
Iceland
Guatemala
Puerto Rico
Togo
Burkina Faso
Honduras
Trinidad and Tobago
Belize
Fiji
Vanuatu
Madagascar
Bhutan
Guyana
Burundi
Tonga
Mozambique
El Salvador
Gambia
Guam
Seychelles
Papua New Guinea
French Polynesia
Zimbabwe
Bermuda
Cook Islands
Cayman Islands
Grenada
Nauru
Suriname
Gabon
Botswana
Saint Lucia
New Caledonia
Greenland
Gibraltar
Taiwan, China
Macau, China
Hong Kong, China
Central African Republic
Chad
Cape Verde
Liechtenstein
Democratic Republic of the Congo
Libya
North Macedonia
Northern Mariana Islands
Eritrea
Djibouti
Costa Rica
Tuvalu
Turkmenistan
Saint Pierre and Miquelon
San Marino
Eswatini
Kiribati
Sierra Leone
Dominican Republic
Dominica
Bangladesh
Anguilla
Antigua and Barbuda
Andorra
Micronesia
Niger
Barbados
Palau
Solomon Islands
Zaire
Monaco
Cambodia
Vatican City
Mauritania
Mauritius
Faroe Islands
Bosnia and Herzegovina
Guadeloupe
Comoros
Ivory Coast
Netherlands Antilles
Mongolia
Montserrat
Norfolk Island
Albania
United Arab Emirates
Aruba
Malawi
Mali
Réunion
Saint Vincent and the Grenadines

```

## 5. How much delay is there in traffic statistics?

Data display in the dashboard has a delay of approximately 1–3 minutes. You can monitor this in the main dashboard view.

## 6. How to batch generate IPs?

### Username & Password Authentication

:::warning ⚠️
For batch generation, you must specify a time duration; **you cannot choose rotation per request**.
:::

### Formats

```text
Proxy server:port:username:password
Proxy server:port@username:password
username:password:Proxy server:port
username:password@Proxy server:port

```

### API Authentication

:::tip 💡
The maximum value you can select on the official website interface is 500. However, you can manually increase this by modifying the **num=** parameter directly inside the generated API URL string.
:::

## 7. What protocols do the proxy IPs support?

* HTTP and SOCKS5

## 8. How many IPs can I use?

You have unlimited access to our pool of over 90 million real residential IPs. You are only limited by your purchased data/traffic usage, not by the number of IPs.