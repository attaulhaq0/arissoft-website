// API Configuration for Hostinger Backend
// Update this URL after deploying to Hostinger
const API_BASE_URL = import.meta.env.PROD 
  ? '/api' // Production: same domain
  : '/api'; // Development: proxy or same domain

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  features: string[];
  sort_order: number;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  sort_order: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  sort_order: number;
}

export interface CompanySettings {
  [key: string]: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
  error?: string;
}

// Generic fetch wrapper with error handling
async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.success === false) {
      throw new Error(data.error || 'Unknown API error');
    }

    return data;
  } catch (error) {
    console.error(`API Error for ${endpoint}:`, error);
    throw error;
  }
}

// Content API
export const contentApi = {
  getServices: async (): Promise<Service[]> => {
    const response = await fetchApi<ApiResponse<Service[]>>('/content.php?type=services');
    return response.data || [];
  },

  getTestimonials: async (): Promise<Testimonial[]> => {
    const response = await fetchApi<ApiResponse<Testimonial[]>>('/content.php?type=testimonials');
    return response.data || [];
  },

  getFAQs: async (): Promise<FAQ[]> => {
    const response = await fetchApi<ApiResponse<FAQ[]>>('/content.php?type=faq');
    return response.data || [];
  },

  getCompanySettings: async (): Promise<CompanySettings> => {
    const response = await fetchApi<ApiResponse<CompanySettings>>('/content.php?type=company');
    return response.data || {};
  },
};

// Contact API
export const contactApi = {
  submit: async (data: ContactSubmission): Promise<{ success: boolean; message: string; id?: number }> => {
    const response = await fetchApi<{ success: boolean; message: string; id?: number }>('/contact.php', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response;
  },
};
