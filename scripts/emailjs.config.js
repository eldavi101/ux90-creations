// EmailJS configuration
// Replace the placeholders below with your EmailJS credentials to enable direct form submissions.
// Create a free account at https://www.emailjs.com/ and set up a service + template.
// If left as-is, the site will fallback to mailto as implemented in main.js.

window.__EMAILJS__ = {
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY", // e.g., "9bXXXXXXX..."
  serviceId: "YOUR_SERVICE_ID",        // e.g., "service_abc123"
  templateId: "YOUR_TEMPLATE_ID"        // e.g., "template_xyz789"
};

// Optional: field mapping if your template uses different variable names
window.__EMAILJS_TEMPLATE_MAP__ = {
  from_name: "name",
  from_email: "email",
  phone: "phone",
  service: "service",
  message: "message",
  page_url: "page_url"
};
