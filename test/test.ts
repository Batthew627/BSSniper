// eslint-disable-next-line @typescript-eslint/no-unused-varsimport { writePlaylist, playlistOfNumber1s, percentageOfNMumber1s, snipePlaylist, rankingQueuePlaylist, playlistOfTopX, playlistOfNotTopX, playlistOfScoresBelowGivenAccuracy, CachedPlayer, getPlayerData, playlistByPercievedWorstScore, playlistByCombo, playlistOfNumber1sWithinXMonths, rankedPlaylistByStarValue } from '../src/main';

async function noTopLevelAsyncAwait() {
    //const pandita = await getPlayerData('76561198186151129');
    await writePlaylist(await rankedPlaylistByStarValue(0,100));
    // void writePlaylist(await rankingQueuePlaylist());
    console.log('Done!');
    process.exit();
}

void noTopLevelAsyncAwait();
