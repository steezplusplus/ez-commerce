import { Container } from 'components/ui/container';

export default async function HomePage() {
  return (
    <Container className="px-4 pb-4">
      <h2 className="mb-1 text-xl underline">Background colors</h2>
      <div className="mb-4 space-y-2">
        <div className="bg-neutral-900 p-1 text-white">bg-neutral-900 (dark)</div>
        <div className="bg-neutral-50 p-1 text-black">bg-neutral-50 (light)</div>
      </div>

      <h2 className="mb-1 text-xl underline">Border themes</h2>
      <div className="mb-4 space-y-2">
        <div className="border border-neutral-800 p-1">border-neutral-800 (dark)</div>
        <div className="border border-neutral-200 p-1">border-neutral-200 (light)</div>
      </div>

      <h2 className="mb-1 text-xl underline">Font size themes</h2>
      <div className="mb-4 space-y-2">
        <h1 className="text-3xl">h1 text-3xl</h1>
        <h2 className="text-xl">h2 text-xl</h2>
        <h3 className="text-lg">h3 text-lg</h3>
        <h4 className="text-sm">h4 text-sm</h4>
        <p className="text-base">p text-base</p>
        <p className="text-sm">p text-sm</p>
        <p className="text-xs">p text-xs</p>
      </div>
    </Container>
  );
}
