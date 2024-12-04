export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Setting {
  companyName: string;
  companyPhone: string;
  companyEmail: string;
  companyAddress: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

export interface Tip {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  createdAt: string;
}

export interface GraphQLResponse<T> {
  data: T;
  errors?: Array<{
    message: string;
    locations?: Array<{
      line: number;
      column: number;
    }>;
    path?: string[];
  }>;
} 