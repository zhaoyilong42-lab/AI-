// Utility to extract pure URL from raw pasted text (e.g. Douyin share copy)
export function extractUrl(text: string): string {
  if (!text) return '';
  const trimmed = text.trim();
  // Regex to capture http:// or https:// links
  const match = trimmed.match(/(https?:\/\/[^\s\u4e00-\u9fa5]+)/i);
  if (match) {
    return match[1];
  }
  return trimmed;
}

// Check if string is a Douyin link or share text
export function isDouyinLink(text: string): boolean {
  if (!text) return false;
  return text.includes('douyin.com') || text.includes('v.douyin') || text.includes('抖音');
}
