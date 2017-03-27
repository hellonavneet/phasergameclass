i = 53

def increment_v1():
    i = 1

increment_v1()
print(i)

def increment_v2():
    global i
    i = i + 1

increment_v2()
print(i)