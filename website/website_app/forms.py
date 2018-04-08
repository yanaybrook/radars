from django import forms
from django.core import validators


class SignIn(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class':'form-input','size':30}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-input','size':30}))

class Register(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class':'form-input','size':39}))
    text = forms.CharField(label='Tell us a bit about yourself',widget=forms.Textarea(attrs={'class':'form-input','rows':4}))
    radarsGuard = forms.CharField(required=False,
                                    widget=forms.HiddenInput,
                                    validators=[validators.MaxLengthValidator(0)])
