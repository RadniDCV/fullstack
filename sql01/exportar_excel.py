import pandas as pd
import mysql.connector

conn = mysql.connector.connect(
    host="192.168.1.9", user="root", password="Radni123", database="RRHH2025"
)

df = pd.read_sql("SELECT * FROM banco", conn)
df.to_excel("salida.xlsx", index=False)