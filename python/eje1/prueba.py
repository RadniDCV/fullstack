import face_recognition
import cv2

# Cargar la imagen de muestra y codificar el rostro
sample_image = face_recognition.load_image_file("rostro_muestra.jpg")
sample_face_encoding = face_recognition.face_encodings(sample_image)[0]

# Iniciar la cámara
video_capture = cv2.VideoCapture(0)

# Verificar si la cámara se abre correctamente
if not video_capture.isOpened():
    print("Error: No se pudo acceder a la cámara.")
    exit()

while True:
    # Capturar un frame de video
    ret, frame = video_capture.read()

    if not ret:
        print("Error al capturar el frame.")
        break

    # Convertir el frame de BGR (que usa OpenCV) a RGB (que usa face_recognition)
    rgb_frame = frame[:, :, ::-1]

    # Detectar todas las ubicaciones de los rostros en el frame
    face_locations = face_recognition.face_locations(rgb_frame)

    # Solo si hay rostros detectados se procede con la comparación
    if face_locations:
        # Codificar los rostros detectados
        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

        # Iterar sobre cada rostro detectado y su codificación
        for face_encoding, face_location in zip(face_encodings, face_locations):
            # Comparar los rostros detectados con el rostro de muestra
            match = face_recognition.compare_faces([sample_face_encoding], face_encoding)

            # Obtener las coordenadas del rostro (arriba, derecha, abajo, izquierda)
            top, right, bottom, left = face_location

            # Dibujar un rectángulo alrededor del rostro detectado
            color = (0, 255, 0) if match[0] else (0, 0, 255)  # Verde si coincide, rojo si no
            cv2.rectangle(frame, (left, top), (right, bottom), color, 2)

            # Mostrar si hay coincidencia o no
            label = "Match" if match[0] else "No Match"
            cv2.putText(frame, label, (left, top - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.75, color, 2)

    # Mostrar el frame en la ventana
    cv2.imshow('Video', frame)

    # Presionar 'q' para salir del bucle
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    
# Liberar la cámara y cerrar las ventanas
video_capture.release()
cv2.destroyAllWindows()
