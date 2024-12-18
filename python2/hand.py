import cv2
import mediapipe as mp

# Inicialización de Mediapipe Hands
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils

# Colores para cada dedo (dedo pulgar al meñique)
finger_colors = [
    (255, 0, 0),    # Pulgar - Rojo -red
    (0, 255, 0),    # Índice - Verde - green
    (0, 0, 255),    # Medio - Azul
    (255, 255, 0),  # Anular - Amarillo
    (255, 0, 255)   # Meñique - Magenta
]

# Configuración de la cámara
cap = cv2.VideoCapture(0)

with mp_hands.Hands(static_image_mode=False, max_num_hands=2, min_detection_confidence=0.5, min_tracking_confidence=0.5) as hands:
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            print("Error al capturar la imagen.")
            break

        # Convertir la imagen de BGR a RGB
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(frame_rgb)

        # Si se detectan manos
        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                # Dibujar los puntos clave de la mano
                mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

                # Dibujar cada dedo con su color correspondiente
                for i, finger_index in enumerate([4, 8, 12, 16, 20]):  # Índices de los dedos en Mediapipe
                    finger_tip = hand_landmarks.landmark[finger_index]

                    # Convertir coordenadas relativas a coordenadas de píxeles
                    h, w, _ = frame.shape
                    cx, cy = int(finger_tip.x * w), int(finger_tip.y * h)

                    # Dibujar un círculo en la punta de cada dedo
                    cv2.circle(frame, (cx, cy), 10, finger_colors[i], -1)

        # Mostrar la imagen
        cv2.imshow('Reconocimiento de Manos', frame)

        # Salir con la tecla 'q'
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

# Liberar la cámara y cerrar las ventanas
cap.release()
cv2.destroyAllWindows()
