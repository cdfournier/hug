import {
  adapterHealth,
  agents,
  inboxItems,
  libraryItems,
  receipts,
  sessions,
  wakePolicies
} from "../fixtures";
import type { AgentId, InboxItem } from "../types";

export function listAgents() {
  return agents;
}

export function listSessions() {
  return sessions;
}

export function listActiveSessions() {
  return sessions.filter((session) => session.status === "active" || session.status === "paused");
}

export function listInboxItems(filters?: { needsAction?: boolean }) {
  if (filters?.needsAction) {
    return inboxItems.filter((item) => item.requiresOperatorAction);
  }

  return inboxItems;
}

export function listHomeAttentionItems(): InboxItem[] {
  return inboxItems
    .filter((item) => item.requiresOperatorAction || item.priority === "urgent" || item.status === "deferred")
    .slice(0, 4);
}

export function listReceipts() {
  return receipts;
}

export function listRecentReceipts() {
  return receipts.slice(0, 4);
}

export function getWakePolicy(agentId: AgentId) {
  return wakePolicies.find((policy) => policy.agentId === agentId);
}

export function listWakePolicies() {
  return wakePolicies;
}

export function listLibraryItems() {
  return libraryItems;
}

export function listAdapterHealth() {
  return adapterHealth;
}
