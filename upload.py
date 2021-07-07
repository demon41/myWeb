import base64

file = open('4444.jpg', 'rb')
img = base64.b64encode(file.read())
print(img)