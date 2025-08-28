// import { CreateNewUserParams } from "@/types";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllBlogs = async () => {
  try {
    const { data } = await axios.get(`${baseURL + "/api/blogs?per_page=1000"}`);
    return data?.data?.data;
  } catch (error: any) {}
};

export const getContactData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/contact-data`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data?.data?.en;
  } catch (error) {
    return [];
  }
};
export const getAboutData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/about-sections`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data?.data;
  } catch (error) {
    return [];
  }
};
export const getAboutWhyUs = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/why-choose-us`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data?.data;
  } catch (error) {
    return [];
  }
};
export const getTeamData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/why-choose-us`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data?.data;
  } catch (error) {
    return [];
  }
};
export const getPortoCat = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/gallery/categories`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data?.results;
  } catch (error) {
    return [];
  }
};

export const getSocialImages = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/gallery?category_id=18`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data?.results;
  } catch (error) {
    return [];
  }
};
export const getAllGallery = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data?.results;
  } catch (error) {
    return [];
  }
};

export const getPortoData = async (categoryId: number, isMobile: boolean = false) => {
  try {
    const res = await fetch(
      `/api/portfolio?categoryId=${categoryId}&view_from=${isMobile ? 'mobile' : 'web'}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const { results } = await res.json();
    return results || [];
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return [];
  }
};
export const getJobs = async (categoryId?: number | null) => {
  try {
    let url = "/api/jobs";
    if (categoryId && categoryId !== 0) {
      url += `?categoryId=${categoryId}`;
    }

    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      return { success: false, data: [] };
    }

    const json = await res.json();
    return { success: true, data: json.results };
  } catch (error) {
    return { success: false, data: [] };
  }
};
export const getSelectedJob = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      return { success: false, data: [] };
    }

    const json = await res.json();
    return { success: true, data: json.data };
  } catch (error) {
    return { success: false, data: [] };
  }
};

export const getJobsCategory = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/job-categories`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return [];
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getBlogCategory = async (category: string) => {
  try {
    return await axios.get(`${baseURL + "/api/blogs?category=" + category}`);
  } catch (error) {
    return [];
  }
};

export const getSingleBlog = async (slug: string) => {
  try {
    const { data } = await axios.get(`${baseURL}/api/blogs/${slug}`);

    if (data?.status === 404 || !data?.data) {
      return null;
    }

    return data.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      return null;
    }
    throw error; 
  }
};


export const searchBlogs = async (searchTerm?: string) => {
  try {
    let url = `/api/filterBlogs`;
    if (searchTerm) url += `?term=${encodeURIComponent(searchTerm)}`;
    const response = await axios.get(url);
    return response?.data?.data || [];
  } catch (error) {
    return [];
  }
};

export const ContactAPI = async (params: any) => {
  try {
    const response = await axios.post("/api/contact", params, {
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error: any) {
    // Throw the error so the form can handle it properly
    throw new Error(error.response?.data?.message || error.message || 'Failed to send message');
  }
};

export const getAllServices = async () => {
  try {
    const { data } = await axios.get(`${baseURL + "/api/services"}`);
    return data?.data;
  } catch (error: any) {
    return [];
  }
};

export const getSingleService = async (slug: string) => {
  try {
    const { data } = await axios.get(`${baseURL + "/api/services/" + slug}`);
    return data?.data;
  } catch (error: any) {
    return [];
  }
};

export const getBrands = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/api/brands`);
    return data?.data;
  } catch (error: any) {
    return [];
  }
};

// export const createNewUserAPI = (params: CreateNewUserParams) =>
//   axios.post("/api/register", {params ,

//     headers:{
//       'Content-Type': 'application/json'
//     }
//    } );
// export const LoginAPI = (params: CreateNewUserParams) =>
//   axios.post("/api/login", {params ,

//     headers:{
//       'Content-Type': 'application/json'
//     }
//    } );

//    export const getVeriyCode = (code : string) =>
//     axios.get(`/api/proxy?url=${baseURL + '/api/register/verify/'+code}`);
