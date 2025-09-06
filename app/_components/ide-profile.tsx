import React from 'react';

export const Profile = () => {
  const codeString = `type Profile = {
  name: string;
  age: number;
  address: string;
  carier_path: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export const profile: Profile = {
  name: 'Abya Bahari Wafdulloh S',
  age: 20,
  address: 'Kediri, Jawa Timur',
  carier_path: 'Software Engineer',
  github: 'https://github.com/abyalax',
  linkedin: 'https://linkedin.com/in/abyalax',
  instagram: 'https://instagram.com/abya.xc',
}`;

  const renderLineWithSyntaxHighlighting = (line: string, lineNumber: number) => {
    let highlightedLine = line;

    // Keywords - make sure not to replace inside existing spans
    const keywords = ['import', 'const', 'export', 'from', 'type'];
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(?<!<[^>]*)\\b${keyword}\\b(?![^<]*>)`, 'g');
      highlightedLine = highlightedLine.replace(regex, `<span style="color: #c792ea">${keyword}</span>`);
    });

    // Type annotations
    highlightedLine = highlightedLine.replace(/:\s*(string|number|Profile)\b/g, ': <span style="color: #82aaff">$1</span>');

    // Property names
    highlightedLine = highlightedLine.replace(/^(\s*)([a-zA-Z_][a-zA-Z0-9_]*):(?!\s*<)/gm, '$1<span style="color: #82d7f7">$2</span>:');

    // Numbers
    highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span style="color: #f78c6c">$1</span>');

    highlightedLine = highlightedLine.replace(/'([^']*)'/g, function (match, content) {
      // Check if content is a URL
      if (content.match(/^https?:\/\/.+/)) {
        return `<a href="${content}" target="_blank" rel="noopener noreferrer" style="color: #c3e88d; text-decoration: underline;">'${content}'</a>`;
      }
      return `<span style="color: #c3e88d">'${content}'</span>`;
    });

    return (
      <div key={lineNumber} style={{ display: 'flex' }}>
        <span style={{ color: '#6b7280', userSelect: 'none', width: '32px', textAlign: 'right', marginRight: '16px', fontSize: '14px' }}>{lineNumber}</span>
        <span style={{ flex: 1, color: '#e5e7eb', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre' }} dangerouslySetInnerHTML={{ __html: highlightedLine }} />
      </div>
    );
  };

  const lines = codeString.split('\n');

  return (
    <div className="bg-gray-900 rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden w-full min-w-[500px] mx-auto">
      {/* Window Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm font-medium ml-4">profile.ts</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 bg-transparent border-none cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 12l-4-4h8l-4 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto">
        <div className="flex flex-col gap-1">{lines.map((line, index) => renderLineWithSyntaxHighlighting(line, index + 1))}</div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <span>TypeScript</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Ln 1, Col 1</span>
            <span>Spaces: 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};
