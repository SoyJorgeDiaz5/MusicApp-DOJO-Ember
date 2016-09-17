import { test } from 'qunit';
import moduleForAcceptance from 'songs-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list songs');

test('should redirect to spies route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/songs', 'should redirect automatically');
  });
});

test('should list available songs.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

