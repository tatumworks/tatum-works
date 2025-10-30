from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(["GET"])
def features(request):
    data = [
        {"title": "AI Integration", "desc": "Seamlessly connects with AI systems"},
        {"title": "3D Worlds", "desc": "Fully immersive virtual spaces"},
    ]
    return Response(data)

