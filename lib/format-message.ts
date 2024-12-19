export function formatMessage(text: string): string {
    // Replace **text** with bold spans
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }