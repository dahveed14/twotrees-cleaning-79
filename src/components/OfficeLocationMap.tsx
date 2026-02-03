import { MapPin } from "lucide-react";

interface OfficeLocationMapProps {
  title?: string;
  address?: string;
  mapSrc: string;
  mapTitle: string;
}

export const OfficeLocationMap = ({
  title = "Visit Our Office",
  address,
  mapSrc,
  mapTitle,
}: OfficeLocationMapProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-8 h-8 text-two-trees-green" />
          </div>
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            {title}
          </h2>
          {address && (
            <p className="text-xl text-gray-600">
              {address}
            </p>
          )}
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={mapTitle}
          />
        </div>
      </div>
    </section>
  );
};
