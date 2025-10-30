from django.urls import path
from .views import features

urlpatterns = [
    path("features/", features, name="features"),
]
