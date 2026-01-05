from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .database import SessionLocal
from .models import Contact
from .schemas import ContactCreate

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/contactform")
def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    new_contact = Contact(
        full_name=contact.full_name,
        email=contact.email,
        phone_number=contact.phone_number,
        message=contact.message
    )
    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)
    return {"message": "Contact saved successfully"}
