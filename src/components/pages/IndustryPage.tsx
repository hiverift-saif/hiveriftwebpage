import { IndustryTemplate } from "./industries/IndustryTemplate";
import { industryData } from "./industries/industryData";

interface IndustryPageProps {
  industryId: string;
  onNavigate?: (page: string) => void;
}

export function IndustryPage({ industryId, onNavigate }: IndustryPageProps) {
  const data = industryData[industryId as keyof typeof industryData];
  
  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Industry Not Found</h1>
          <p className="text-gray-300 mb-8">The requested industry page could not be found.</p>
          <button 
            onClick={() => onNavigate?.('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return <IndustryTemplate data={data} onNavigate={onNavigate} />;
}