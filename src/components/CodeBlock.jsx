import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const CodeBlock = ({ title, code, description }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple clean syntax highlighting for Java keywords
  const highlightJava = (rawCode) => {
    // Escape HTML first
    const escaped = rawCode
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Highlight strings, comments, and keywords
    return escaped
      .replace(/(".*?"|'.*? harvest')/g, '<span style="color: #34d399;">$1</span>')
      .replace(/(\/\/.+$)/gm, '<span style="color: #64748b; font-style: italic;">$1</span>')
      .replace(/\b(public|private|protected|class|interface|abstract|extends|implements|static|final|void|return|new|this|super|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|throws|import|package|int|double|float|char|boolean|String|long|short|byte|null|true|false)\b/g, '<span style="color: #c084fc; font-weight: 600;">$1</span>')
      .replace(/(@\w+)/g, '<span style="color: #fbbf24;">$1</span>');
  };

  return (
    <div class="code-block-wrapper">
      <div class="code-header">
        <span class="code-title">📄 {title}</span>
        <button class="copy-btn" onClick={handleCopy}>
          {copied ? <Check size={14} class="text-success" /> : <Copy size={14} />}
          <span>{copied ? 'Copied!' : 'Copy Code'}</span>
        </button>
      </div>

      <pre class="code-block">
        <code dangerouslySetInnerHTML={{ __html: highlightJava(code) }} />
      </pre>

      {description && <div class="code-description">💡 {description}</div>}
    </div>
  );
};
