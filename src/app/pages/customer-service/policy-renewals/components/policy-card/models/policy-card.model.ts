export interface PolicyCard {
  id: number;
  ticketCode: string;
  entityId: string;
  entityName: string;
  entityProfilePictureUri: string;
  dateCreated: string;
  dateModified: string;
  sourceId: number;
  sourceName: string;
  sourceIconUrl: string;
  primaryCommunicationChannelId: number;
  status: number;
  ticketTypeId: number;
  ticketTypeName: string;
  ticketTypeIconUri: string;
  assignedToId: string;
  assignedToName: string;
  assignedToProfilePictureUri: string;
  detailsJson: string;
}
