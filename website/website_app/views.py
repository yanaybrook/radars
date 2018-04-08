from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseRedirect
from . import forms

# Create your views here.

def index(request):
    return render(request,'website_app/index.html')

def form_sign_in(request):
    form = forms.SignIn()

    if request.method == 'POST':
        form = forms.SignIn(request.POST)

        if form.is_valid():
            # DO SOMETHING CODE
            return dashboard(request)

    return render(request,'website_app/signin.html',{'signin_form':form})

def form_register(request):
    form = forms.Register()

    if request.method == 'POST':
        form = forms.Register(request.POST)
        if form.is_valid():
            # DO SOMETHING CODE
            print("VALIDATION SUCCESS!")

    return render(request,'website_app/register.html',{'register_form':form})

def dashboard(request):
    return render(request,'website_app/dashboard.html')
