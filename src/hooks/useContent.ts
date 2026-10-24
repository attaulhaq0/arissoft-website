import { useQuery } from '@tanstack/react-query';
import { contentApi, Service, Testimonial, FAQ, CompanySettings } from '@/lib/api';

// Hook for fetching services
export function useServices() {
  return useQuery<Service[], Error>({
    queryKey: ['services'],
    queryFn: contentApi.getServices,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}

// Hook for fetching testimonials
export function useTestimonials() {
  return useQuery<Testimonial[], Error>({
    queryKey: ['testimonials'],
    queryFn: contentApi.getTestimonials,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}

// Hook for fetching FAQs
export function useFAQs() {
  return useQuery<FAQ[], Error>({
    queryKey: ['faqs'],
    queryFn: contentApi.getFAQs,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}

// Hook for fetching company settings
export function useCompanySettings() {
  return useQuery<CompanySettings, Error>({
    queryKey: ['company-settings'],
    queryFn: contentApi.getCompanySettings,
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  });
}
