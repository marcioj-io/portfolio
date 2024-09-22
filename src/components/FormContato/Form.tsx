import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { POSTWebHook } from '../../services/contact/route';

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    console.log('Submitting:', data);
    try {
      const response = await POSTWebHook(data);
      console.log('Response from webhook:', response);
      toast.success('Mensagem enviada com sucesso!');
      reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-[88vw] grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <input
        placeholder="Nome"
        {...register('name')}
        className="h-12 w-full bg-gray-100 border border-gray-300 p-6 text-lg text-gray-800 rounded-lg focus:outline-none focus:border-primary placeholder:text-gray-800"
      />
      <input
        placeholder="E-mail"
        type="email"
        {...register('email')}
        className="h-12 w-full bg-gray-100 border border-gray-300 p-6 text-lg text-gray-800 rounded-lg focus:outline-none focus:border-primary placeholder:text-gray-800"
      />
      <textarea
        placeholder="Mensagem"
        {...register('message')}
        maxLength={500}
        className="h-40 w-full bg-gray-100 border border-gray-300 p-6 text-lg text-gray-800 rounded-lg focus:outline-none focus:border-primary resize-none sm:col-span-2"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#574529] text-gray-100 py-3 px-6 text-lg font-sans rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50 sm:w- md:w-72"
      >
        Enviar mensagem
      </button>
    </form>
  );
};
