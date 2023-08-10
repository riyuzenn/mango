import {
  DiscordServerMemberProps,
  DiscordServerProps
} from '@/interfaces/discord';
import { mono } from '@/lib/font';
import { useFetch } from '@/lib/useFetch';
import React from 'react';
import * as M from 'react-fast-marquee';

type CardProps = {
  text: string;
  sub: number;
  className?: string;
};

type AvatarProps = {
  members: Array<DiscordServerMemberProps>;
  className?: string;
};

type MarqueeProps = {
  className?: string;
  m?: string;
};

export const Avatar = ({ members, className = '' }: AvatarProps) => {
  return (
    <div className={`${className} px-6 mx-16`}>
      <div className="flex -space-x-1 overflow-hidden">
        {members.slice(0, 8).map((v, i) => {
          return (
            <img
              className="inline-block h-8 w-8 rounded-full ring-1 dark:ring-white ring-black"
              src={v.avatar_url}
              alt={v.username}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

const Text = ({
  text,
  className = ''
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={`${className} px-5 mx-16`}>
      <h1
        className={`
        alpha text-[20px] font-medium 
        dark:text-[#0e0e0e] text-[#fff]
        dark:selection:text-[#fff] dark:selection:bg-[#0e0e0e]
        selection:text-[#0e0e0e] selection:bg-[#fff]
      `}
      >
        {text}
      </h1>
    </div>
  );
};

export const Card = ({ text, sub, className = '' }: CardProps) => {
  return (
    <div className={`${className} px-5 mx-16`}>
      <h1
        className={`
        alpha text-[30px] font-medium 
        dark:text-[#0e0e0e] text-[#fff]
        dark:selection:text-[#fff] dark:selection:bg-[#0e0e0e]
        selection:text-[#0e0e0e] selection:bg-[#fff]
      `}
      >
        {text} : {' '} 
        <span className={`
          text-[#E6FA95] dark:text-[#8BB966] dark:selection:text-[#fff] 
          dark:selection:bg-[#0e0e0e] selection:text-[#0e0e0e] 
          selection:bg-[#fff]
        `}>{sub}</span>
      </h1>
    </div>
  );
};

export const TopMarquee = ({ className = '', m = '' }: MarqueeProps) => {
  return (
    <React.Fragment>
      <div className={className}>
        <M.default
          direction="right"
          speed={150}
          pauseOnHover
          className={`
          dark:bg-[#fff] bg-[#111] ${m}
        `}
        >
          <Text text="CALL OF DUTY MOBILE" />

          <p
            className={`
              text-[20px] alpha
              text-[#fff] dark:text-[#0e0e0e]
            `}
          >
            •
          </p>
          <Text text="LEAGUE OF LEGENDS" />
          <p
            className={`
              text-[25px] alpha
              text-[#fff] dark:text-[#0e0e0e]
            `}
          >
            •
          </p>
          <Text text="VALORANT" />
          <p
            className={`
              text-[25px] alpha
              text-[#fff] dark:text-[#0e0e0e]
            `}
          >
            •
          </p>
          <Text text="MOBILE LEGENDS" />
          <p
            className={`
              text-[25px] alpha
              text-[#fff] dark:text-[#0e0e0e]
            `}
          >
            •
          </p>
        </M.default>
      </div>
    </React.Fragment>
  );
};

export const StatusMarquee = ({ className = '', m = '' }: MarqueeProps) => {
  const { data } = useFetch<DiscordServerProps>(
    `https://discord.com/api/guilds/1129031451304792166/widget.json`
  );
  return (
    <React.Fragment>
      <div className={className}>
        <M.default
          pauseOnHover
          className={`
          dark:bg-[#fff] py-2 bg-[#111] ${m}
        `}
        >
          <Card text={'CURRENT ONLINE'} sub={data ? data.presence_count : 0} />
          <p
            className={`
              text-[25px] alpha
              text-[#fff] dark:text-[#0e0e0e]
            `}
          >
            •
          </p>

          {data ? (
            <div className="flex justify-center items-center">
              <Avatar members={data.members} />
              <p
                className={`
              text-[25px] alpha
              text-[#fff] dark:text-[#0e0e0e]
            `}
              >
                •
              </p>
            </div>
          ) : (
            <></>
          )}
          <Card
            text={`NUMBER OF CHANNELS`}
            sub={data ? data.channels.length : 0}
          />
          <p
            className={`
              text-[25px] alpha
              text-[#fff] dark:text-[#0e0e0e]
            `}
          >
            •
          </p>
        </M.default>
      </div>
    </React.Fragment>
  );
};
