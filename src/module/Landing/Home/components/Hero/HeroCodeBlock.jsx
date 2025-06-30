import { FaCode } from "react-icons/fa";
import Prism from "prismjs";

const HeroCodeBlock = ({ codeSnippet }) => {
  return (
    <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
      <div className="flex items-center px-6 py-4 bg-gray-800/50 border-b border-gray-700/50">
        <div className="flex space-x-2 mr-6">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
        </div>
        <div className="text-sm text-gray-400 font-mono">profile.js</div>
      </div>

      <pre className="language-javascript max-h-[400px] overflow-auto p-6 text-sm md:text-base">
        <code
          className="language-javascript"
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              codeSnippet,
              Prism.languages.javascript,
              "javascript",
            ),
          }}
        />
      </pre>

      <div className="flex justify-between items-center px-6 py-4 bg-gray-800/50 border-t border-gray-700/50">
        <div className="text-xs text-gray-500 font-mono">ES6 JavaScript</div>
        <button
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          onClick={() => navigator.clipboard.writeText(codeSnippet)}
        >
          <FaCode className="w-4 h-4" />
          <span className="text-sm font-medium">Copy</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCodeBlock;
