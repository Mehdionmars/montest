export async function fetchConversations() {
  const response = await fetch('http://localhost:3000/api/messages/conversations');
  if (!response.ok) throw new Error('Failed to fetch conversations');
  return response.json();
}

export async function fetchMessages(conversationId: string) {
  const response = await fetch(`http://localhost:3000/api/messages/${conversationId}`);
  if (!response.ok) throw new Error('Failed to fetch messages');
  return response.json();
}