print("Hello World")
numbers = "1,2,3,4"
print(numbers)

# tupla
nested =(("apple","banana"),(10,20,30),("x","y","z"))
print(nested[1])

#lista
colors = ["red","green","blue","yellow"]
forward_slice = colors[1:3]
print(forward_slice)

#lista
numbers1 =[10,20,30,40,50,60]
range_slice =numbers1[0:6:2]
print(range_slice)

nested_tuple =((1,2,3),(4,5,6),(7,8,9))
last_element =nested_tuple[1][2]

fruits = ["apple","banana", "cherry"]
fruits.append("orange")
print(fruits)


fruits2 = ["apple","banana", "cherry","orange"]
fruits2.remove("banana")
print(fruits2)