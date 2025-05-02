import cv2
import pytesseract
import re
from datetime import datetime

# Si quieres, defines manualmente la ruta del tesseract
# pytesseract.pytesseract.tesseract_cmd = '/opt/homebrew/bin/tesseract'

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Procesamiento de la imagen cambia a escala de grises
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detectar placas (esto es simplificado, normalmente usarías un detector)
    plate_roi = gray  # Por ahora procesamos toda la imagen

    # OCR
    plate_text = pytesseract.image_to_string(plate_roi, config='--psm 8 --oem 3')
    plate_text = plate_text.strip().replace(" ", "").upper()  # Limpiar

    # Validar formato de placa hay que revisar
    pattern = r'^\d{4}[A-Z]{3}$'
    if re.match(pattern, plate_text):
        print("Placa válida detectada:", plate_text)
        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        with open("placas_detectadas.txt", "a") as f:
            f.write(f"{plate_text} - {now}\n")
    else:
        print("Texto detectado no es una placa válida:", plate_text)

    cv2.imshow('Video', frame)

    if cv2.waitKey(1) == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
