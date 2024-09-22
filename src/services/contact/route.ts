import axios from 'axios';
import { ContactFormData } from '../../components/FormContato/Form';

const WEBHOOK_URL = process.env.REACT_APP_PUBLIC_WEBHOOK_URL!;

export async function POSTWebHook(request: ContactFormData) {
  if (!WEBHOOK_URL) {
    return [
      { error: 'URL do webhook não está configurada.' },
      { status: 500 }
    ];
  }

  try {
    const { name, email, message } = request;

    const messageData = {
      embeds: [
        {
          title: 'Mensagem de Contato',
          color: 0x4983f5,
          fields: [
            {
              name: 'Nome',
              value: name,
              inline: true,
            },
            {
              name: 'E-mail',
              value: email,
              inline: true,
            },
            {
              name: 'Mensagem',
              value: message,
            },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, messageData);

    return {
      message: 'Mensagem enviada com sucesso!',
    };
  } catch (error: any) {
    console.error('Erro ao enviar mensagem:', error);
    return [
      { error: error?.message || 'Ocorreu um erro ao enviar a mensagem.' },
      { status: 500 }
    ]
  }
}
