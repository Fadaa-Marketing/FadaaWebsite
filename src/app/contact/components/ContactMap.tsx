import React from "react";

interface ContactMapProps {
  latitude: string;
  longitude: string;
  zoom?: number;
}

const ContactMap: React.FC<ContactMapProps> = ({
  latitude,
  longitude,
  zoom = 16,
}) => {
  // const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
  return (
    <div className="bg-primary">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d216.05085495134554!2d30.9119744!3d29.9560375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585759023c037d%3A0x459cdd7ed6a0e177!2zRmFkYWEgTWFya2V0aW5nIC0g2YHYttin2KE!5e0!3m2!1sen!2seg!4v1753802772425!5m2!1sen!2seg"
        allowFullScreen
        height={350}
        className="border-0 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
