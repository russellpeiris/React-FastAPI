from app.database import engine
from app.models import User
from app.routes import auth, user
from fastapi import FastAPI

User.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)
app.include_router(user.router)
   