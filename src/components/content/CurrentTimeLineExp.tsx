'use client';
import { Timeline, TimelineEvent } from './TimeLineExp';
import { experienceEntries } from '@/src/configs/experience';
import Link from 'next/link';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      {experienceEntries.map((entry, index) => (
        <TimelineEvent key={index} active={entry.isActive}>
          <TimelineEvent.Title>
            {entry.companyUrl ? (
              <Link
                href={entry.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {entry.title}{' '}
                <span>
                  {entry.startDate} - {entry.endDate}
                </span>
              </Link>
            ) : (
              entry.title
            )}
            {entry.isActive && (
              <span className="ml-2 text-sm text-green-500 font-semibold">
                Active
              </span>
            )}
          </TimelineEvent.Title>

          {entry.description.map((desc) => (
            <TimelineEvent.Description key={desc.id}>
              {desc.text}
            </TimelineEvent.Description>
          ))}
        </TimelineEvent>
      ))}
    </Timeline>
  );
};

export default CurrentTimeLineExp;
