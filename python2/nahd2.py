import cv2
import mediapipe as mp

# Inicialización de Mediapipe Hands
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils

# Colores para cada dedo (dedo pulgar al meñique)
finger_colors = [
    (255, 0, 0),    # Pulgar - Rojo
    (0, 255, 0),    # Índice - Verde
    (0, 0, 255),    # Medio - Azul
    (255, 255, 0),  # Anular - Amarillo
    (255, 0, 255)   # Meñique - Magenta
]

# Configuración de la cámara
cap = cv2.VideoCapture(0)

# Inicializar un estado para cada dedo (0: vacío, 1: lleno)
finger_states = [0, 0, 0, 0, 0]

with mp_hands.Hands(static_image_mode=False, max_num_hands=2, min_detection_confidence=0.5, min_tracking_confidence=0.5) as hands:
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            print("Error al capturar la imagen.")
            break

        # Convertir la imagen de BGR a RGB
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(frame_rgb)

        # Dibujar cajas para los dedos en la parte superior de la pantalla
        h, w, _ = frame.shape
        box_width, box_height = 100, 50
        for i, color in enumerate(finger_colors):
            x1 = i * box_width
            y1 = 0
            x2 = x1 + box_width
            y2 = y1 + box_height

            # Rellenar la caja si el dedo correspondiente está "activo"
            if finger_states[i]:
                cv2.rectangle(frame, (x1, y1), (x2, y2), color, -1)
            else:
                cv2.rectangle(frame, (x1, y1), (x2, y2), (255, 255, 255), -1)

            # Dibujar borde de la caja
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 0), 2)

        # Si se detectan manos
        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                # Dibujar los puntos clave de la mano
                mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

                # Dibujar cada dedo con su color correspondiente
                for i, finger_index in enumerate([4, 8, 12, 16, 20]):  # Índices de los dedos en Mediapipe
                    finger_tip = hand_landmarks.landmark[finger_index]

                    # Convertir coordenadas relativas a coordenadas de píxeles
                    cx, cy = int(finger_tip.x * w), int(finger_tip.y * h)

                    # Dibujar un círculo en la punta de cada dedo
                    cv2.circle(frame, (cx, cy), 10, finger_colors[i], -1)

                    # Actualizar el estado del dedo si se detecta movimiento (dentro de un umbral)
                    if cy < box_height:  # Si el dedo está cerca de su caja correspondiente
                        finger_states[i] = 1

        # Mostrar la imagen
        cv2.imshow('Reconocimiento de Manos', frame)

        # Salir con la tecla 'q'
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

# Liberar la cámara y cerrar las ventanas
cap.release()
cv2.destroyAllWindows()
