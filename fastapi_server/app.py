from fastapi import FastAPI
app=FastAPI()

@app.get("/getStudents")
def getStudents():
    return "get student method called"

@app.post("/addStudents")
def addStudents():
    return "add student method called"

@app.put("/updateStudents")
def updateStudents():
    return "update student method called"

@app.delete("/deleteStudents")
def deleteStudents():
    return "delete student method called"