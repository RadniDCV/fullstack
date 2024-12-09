import cv2
import numpy as np

# Cargar la imagen de referencia (estado inicial del río) no cambiar el bombre
ref_image_path = "river_reference.png"  # Imagen de referencia estática
ref_image = cv2.imread(ref_image_path, cv2.IMREAD_GRAYSCALE)

# Verificar si la imagen de referencia se cargó correctamente
if ref_image is None:
    raise Exception("No se pudo cargar la imagen de referencia.")

# Inicializar la cámara (cámara por defecto, usa 0) el iphone en mi caso
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    raise Exception("No se pudo acceder a la cámara.")

# Ajustar la resolución de captura (opcional)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

# Definir el umbral para el crecimiento del río 
growth_threshold = 55.0  # Porcentaje mínimo de cambio para considerar que el río creció 55%

# Procesar imágenes en tiempo real
try:
    while True:
        # Capturar un frame de la cámara
        ret, frame = cap.read()
        if not ret:
            print("No se pudo capturar el frame.")
            break
        
        # Convertir el frame a escala de grises
        current_image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        
        # Ajustar el tamaño de la imagen actual para que coincida con la referencia
        current_image = cv2.resize(current_image, (ref_image.shape[1], ref_image.shape[0]))

        # Calcular la diferencia absoluta entre las imágenes
        diff = cv2.absdiff(ref_image, current_image)
        
        # Aplicar un umbral para resaltar áreas con cambios significativos
        _, thresh = cv2.threshold(diff, 50, 255, cv2.THRESH_BINARY)
        
        # Detectar contornos en las áreas cambiadas
        contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        
        # Dibujar los contornos en el frame para visualización
        result_image = cv2.cvtColor(current_image, cv2.COLOR_GRAY2BGR)
        cv2.drawContours(result_image, contours, -1, (0, 0, 255), 2)

        # Calcular el porcentaje de área cambiada
        total_area = current_image.shape[0] * current_image.shape[1]
        changed_area = sum(cv2.contourArea(contour) for contour in contours)
        change_percentage = (changed_area / total_area) * 100

        # Mostrar el porcentaje de cambio en pantalla
        cv2.putText(result_image, f"Cambio: {change_percentage:.2f}%", (10, 30),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        # Verificar si el cambio supera el umbral
        if change_percentage > growth_threshold:
            print("ALERTA: ¡El río ha crecido significativamente!")
            cv2.putText(result_image, "ALERTA: RIO CRECIDO", (10, 70),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

        # Mostrar la imagen procesada
        cv2.imshow("Diferencias Detectadas", result_image)

        # Salir si se presiona la tecla 'q'
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
finally:
    # Liberar la cámara y cerrar ventanas al salir
    cap.release()
    cv2.destroyAllWindows()
