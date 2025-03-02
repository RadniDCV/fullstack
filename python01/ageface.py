import cv2
import os
from deepface import DeepFace


def estimar_edad(ruta_imagen):
    """Estima la edad de una persona en una imagen dada.

    Args:
        ruta_imagen (str): Ruta de la imagen a analizar.

    Returns:
        int or None: Edad estimada en años, o None si ocurre un error.
    """
    if not os.path.exists(ruta_imagen):
        print(f"Error: La imagen '{ruta_imagen}' no existe.")
        return None

    try:
        # Cargar la imagen
        imagen = cv2.imread(ruta_imagen)
        if imagen is None:
            print("Error: No se pudo cargar la imagen. Verifica el formato.")
            return None

        # Analizar la imagen con DeepFace para estimar la edad
        resultado = DeepFace.analyze(img_path=ruta_imagen, actions=['age'], enforce_detection=False)

        # Extraer edad estimada
        edad = resultado[0]['age']
        print(f"Edad estimada: {edad} años")
        return edad
    except Exception as e:
        print(f"Error al analizar la imagen: {e}")
        return None

# Ruta de la imagen a analizar
ruta = "persona.jpeg"  # Cambia por la ruta de tu imagen
estimar_edad(ruta)