import cv2
import numpy as np
from twilio.rest import Client

# Configuración de Twilio
account_sid = "0"  # Reemplaza con tu SID de cuenta
auth_token = "0"    # Reemplaza con tu token de autenticación
twilio_client = Client(account_sid, auth_token)

# Números de WhatsApp
from_whatsapp_number = "whatsapp:+14155238886"  # Número de Twilio
to_whatsapp_number = "whatsapp:+59167159427"      # Tu número de WhatsApp

def send_whatsapp_alert(change_percentage):
    message = f"⚠️ ALERTA: El río ha crecido significativamente. Cambio detectado: {change_percentage:.2f}%."
    try:
        twilio_client.messages.create(
            body=message,
            from_=from_whatsapp_number,
            to=to_whatsapp_number
        )
        print("Mensaje de alerta enviado por WhatsApp.")
    except Exception as e:
        print(f"Error al enviar el mensaje de WhatsApp: {e}")

# Cargar la imagen de referencia (estado inicial del río)
ref_image_path = "river_reference.png"
ref_image = cv2.imread(ref_image_path, cv2.IMREAD_GRAYSCALE)

if ref_image is None:
    raise Exception("No se pudo cargar la imagen de referencia.")

#en mi caso utiliza el iphone como camara
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    raise Exception("No se pudo acceder a la cámara.")

cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

growth_threshold = 65.0  # Porcentaje mínimo de cambio para activar la alerta 65%

alert_sent = False  # Variable para evitar múltiples envíos de alertas  

try:
    while True:
        ret, frame = cap.read()
        if not ret:
            print("No se pudo capturar el frame.")
            break

        current_image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        current_image = cv2.resize(current_image, (ref_image.shape[1], ref_image.shape[0]))

        diff = cv2.absdiff(ref_image, current_image)
        _, thresh = cv2.threshold(diff, 50, 255, cv2.THRESH_BINARY)
        contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        result_image = cv2.cvtColor(current_image, cv2.COLOR_GRAY2BGR)
        cv2.drawContours(result_image, contours, -1, (0, 0, 255), 2)

        total_area = current_image.shape[0] * current_image.shape[1]
        changed_area = sum(cv2.contourArea(contour) for contour in contours)
        change_percentage = (changed_area / total_area) * 100

        cv2.putText(result_image, f"Cambio: {change_percentage:.2f}%", (10, 30),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        if change_percentage >= growth_threshold and not alert_sent:
            print("ALERTA: ¡El río ha crecido significativamente (60% o más)!")
            cv2.putText(result_image, "ALERTA: RIO CRECIDO", (10, 70),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
            send_whatsapp_alert(change_percentage)
            alert_sent = True  # Asegurarse de que solo se envíe una alerta cuando el nivel del agua crece

        cv2.imshow("Diferencias Detectadas", result_image)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
finally:
    cap.release()
    cv2.destroyAllWindows()
