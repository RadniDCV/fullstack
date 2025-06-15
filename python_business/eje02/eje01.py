import pandas as pd
df = pd.read_excel('./customer_data.xlsx', engine='openpyxl')
df.head()
print (df.head())
