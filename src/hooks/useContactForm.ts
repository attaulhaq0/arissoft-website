import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { contactApi, ContactSubmission } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export function useContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const mutation = useMutation({
    mutationFn: contactApi.submit,
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message || "We'll get back to you within 24 hours.",
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const updateField = (field: keyof ContactSubmission, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing required fields",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    mutation.mutate(formData);
  };

  return {
    formData,
    updateField,
    handleSubmit,
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
}
