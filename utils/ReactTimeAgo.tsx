import TimeAgo from 'react-timeago';
import englishStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const formatter = buildFormatter(englishStrings);

interface Props {
   date: Date;
}

export default function ReactTimeAgo({ date }: Props) {
   return <TimeAgo date={date} formatter={formatter} />;
}
