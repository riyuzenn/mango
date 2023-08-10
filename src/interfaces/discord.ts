export type DiscordServerChannelProps = {
  id: string;
  name: string;
  position: number;
};

export type DiscordServerMemberProps = {
  id: number;
  username: string;
  avatar: string | undefined;
  status: string;
  avatar_url: string;
};

// Server widget props
export type DiscordServerProps = {
  id: string;
  name: string;
  instant_invite: string | undefined;
  channels: Array<DiscordServerChannelProps>;
  members: Array<DiscordServerMemberProps>;
  presence_count: number;
};
