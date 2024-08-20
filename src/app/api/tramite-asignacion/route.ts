import fs from 'fs/promises';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const filePath = path.join(process.cwd(), 'data', 'formSubmissions.json');
        let submissions = [];

        try {
            const fileContent = await fs.readFile(filePath, 'utf8');
            submissions = JSON.parse(fileContent);
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }
        }

        submissions.push(data);

        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));

        return NextResponse.json({ message: 'Datos guardados con éxito' }, { status: 200 });
    } catch (error) {
        console.error('Error al guardar los datos:', error);
        return NextResponse.json({ message: 'Error al guardar los datos' }, { status: 500 });
    }
}
