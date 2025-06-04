import requests
from bs4 import BeautifulSoup
import pandas as pd

url = "https://en.wikipedia.org/wiki/Apple_Inc."
response = requests.get(url)
html_content = response.text
if response.status_code == 200:
    print("Request successfull!")
soup = BeautifulSoup(html_content, 'html.parser')
headings = [heading.text.strip() for heading in soup.find_all(['h1', 'h2','h3'])]
print(headings)
paragraphs = [p.text.strip() for p in soup.find_all('p')]
print(paragraphs)
links= [a['href'] for a in soup.find_all('a', href=True)]
print(links)
infobox = soup.find('table', class_ = 'infobox')

if infobox:
    rows = infobox.find_all('tr')
    data = {}
    for row in rows:
        header = row.find('th')
        value = row.find('td')
        if header and value:
            data[header.text.strip()]= value.text.strip()
        print(data)
else:
    print("Infobox table not found")
table = pd.DataFrame(list(data.items()), columns = ['Key','Value'])
table
table.to_excel("apple_inc_summary_table.xlsx")

