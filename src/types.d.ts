interface PageState {
  userName: string;
  userPronouns: PronounsObj | null;
  resultHidden: boolean;
  descriptionButtonHidden: boolean;
  pronounsHidden: boolean;
  descriptionHidden: boolean;
  result: string;
  nameClicked: boolean;
  showNameError: boolean;
  showPronounsError: boolean;
  description: string;
  descriptionClicked: boolean;
  userInputPronouns: string;
}

interface CharacterName {
  first_name: string;
  strange_first: number;
  last_name: string;
  strange_last: number;
  book: string;
}

interface Nickname {
  nickname: string;
}

interface Prefix {
  prefix: string;
}

interface NameData  {
  characters: CharacterName [];
  nicknames: Nickname [];
  prefixes: Prefix [];
}

interface GetDescriptionProps {
  pageState: PageState;
  setPageState: Dispatch<SetStateAction<PageState>>;
}

interface UserNameInputFormProps {
  pageState: PageState,
  setPageState: Dispatch<SetStateAction<PageState>>
}

interface PageComponentProps {
  pageState: PageState,
  setPageState: Dispatch<SetStateAction<PageState>>
}

interface ErrorProps {
  error: 'name' | 'pronouns'
}

interface GenDescriptionProps {
  name: string;
  pronouns: string;
  descriptionData: any;
}

interface PronounsObj {
  subjective: string;
  objective: string;
  possessive: string;
}

interface Descriptor {
  occupation: string[];
  nationality: string[];
}

const vowels = ['a','e','i','o','u'] as const
type Vowel = (typeof vowels)[number]

type Filenames = ['characters', 'nicknames', 'prefixes']

type ShowResult = (value: boolean) => void;
type SetResult = (value: string) => void;
type GenerateName = (input: string, NameData) => string;
type GetDescription = (pageState: PageState, setPageState: Dispatch<SetStateAction<PageState>>) => JSX.Element | null