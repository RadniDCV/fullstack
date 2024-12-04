import cv2
import numpy as np

# Cargar la imagen de referencia (estado inicial del río)
ref_image_path = "river_current.jpg"  # Cambia esto a la ruta de tu imagen de referencia
ref_image = cv2.imread(ref_image_path, cv2.IMREAD_GRAYSCALE)

# Verificar si la imagen de referencia se cargó correctamente
if ref_image is None:
    raise Exception("No se pudo cargar la imagen de referencia.")

# Configurar una función para procesar la imagen actual
def process_image(current_image_path):
    # Cargar la imagen actual (estado actual del río)
    current_image = cv2.imread(current_image_path, cv2.IMREAD_GRAYSCALE)
    if current_image is None:
        raise Exception("No se pudo cargar la imagen actual.")
    
    # Ajustar el tamaño de la imagen actual para que coincida con la referencia
    current_image = cv2.resize(current_image, (ref_image.shape[1], ref_image.shape[0]))

    # Calcular la diferencia absoluta entre las imágenes
    diff = cv2.absdiff(ref_image, current_image)
    
    # Aplicar un umbral para resaltar áreas con cambios significativos
    _, thresh = cv2.threshold(diff, 50, 255, cv2.THRESH_BINARY)
    
    # Opcional: Detectar contornos en las áreas cambiadas
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # Dibujar los contornos en la imagen actual para visualización
    result_image = cv2.cvtColor(current_image, cv2.COLOR_GRAY2BGR)
    cv2.drawContours(result_image, contours, -1, (0, 0, 255), 2)

    # Calcular el porcentaje de área cambiada
    total_area = current_image.shape[0] * current_image.shape[1]
    changed_area = sum(cv2.contourArea(contour) for contour in contours)
    change_percentage = (changed_area / total_area) * 100
    
    return result_image, change_percentage

# Ruta de una imagen capturada (puedes cambiarla por imágenes en tiempo real de la cámara)
current_image_path = "river_current.jpg"  # Cambia esto a la ruta de tu imagen actual
result_image, change_percentage = process_image(current_image_path)

# Mostrar resultados
print(f"Porcentaje de área cambiada: {change_percentage:.2f}%")
cv2.imshow("Diferencias Detectadas", result_image)

# Esperar una tecla para cerrar las ventanas
cv2.waitKey(0)
cv2.destroyAllWindows()
