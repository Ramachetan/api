from pydantic import BaseModel
from typing import List, Optional

class ItemBase(BaseModel):
    name: str
    price: float

class ItemCreate(ItemBase):
    pass

class ItemUpdate(ItemBase):
    name: Optional[str] = None
    price: Optional[float] = None

class Item(ItemBase):
    id: int

    class Config:
        orm_mode = True
